using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebServer.Api.Entities;
using WebServer.Api.Models;

namespace WebServer.Api.Controllers
{
    [Route("api/players")]
    [ApiController]
    public class PlayersController(HaxballDbContext context) : ControllerBase
    {
        [HttpPost]
        public async Task<ActionResult> RegisterPlayer(RegisterPlayerModel registerPlayerModel)
        {
            var player = await context.Players.SingleOrDefaultAsync(p => p.Id == registerPlayerModel.Id);
            if (player == null)
            {
                player = new Player()
                {
                    Id = registerPlayerModel.Id,
                    Name = registerPlayerModel.Name,
                    Elo1v1 = 1000,
                    Elo4v4 = 1000,
                    MatchesCount1v1 = 0,
                    WinMatchesCount1v1 = 0,
                    MatchesCount4v4 = 0,
                    WinMatchesCount4v4 = 0
                };
                context.Players.Add(player);
                await context.SaveChangesAsync();
                return Created();
            }

            return Ok();
            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Player>> GetPlayer(string id)
        {
            var player = await context.Players.SingleOrDefaultAsync(p => p.Id == id);
            if (player == null)
            {
                return NotFound($"Not found player with Id={id}");
            }
            return Ok(player);
        }

        [HttpPut("{winnerId}/won1v1/{loserId}")]
        public async Task<ActionResult> Update1v1Statistic(string winnerId, string loserId)
        {
            var K = 32;
            var actualScore = 1;
            var winner = await context.Players.SingleOrDefaultAsync(p => p.Id == winnerId);
            var loser = await context.Players.SingleOrDefaultAsync(p => p.Id == loserId);
            var expectedScoreForWinner = 1 / (1 + Math.Pow(10, (loser.Elo1v1 - winner.Elo1v1) / 400.0));
            var gainElo = (int)(K * (actualScore - expectedScoreForWinner));
            winner.Elo1v1 = winner.Elo1v1 + gainElo;
            winner.MatchesCount1v1 = winner.MatchesCount1v1 + 1;
            winner.WinMatchesCount1v1 = winner.WinMatchesCount1v1 + 1;
            loser.Elo1v1 = loser.Elo1v1 - gainElo;
            loser.MatchesCount1v1 = winner.MatchesCount1v1 + 1;
            return Ok();
        }
    }
}
