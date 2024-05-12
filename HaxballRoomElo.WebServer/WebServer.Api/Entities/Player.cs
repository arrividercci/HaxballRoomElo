namespace WebServer.Api.Entities
{
    public class Player
    {
        public string? Id { get; set; }
        public string? Name { get; set; }
        public int MatchesCount4v4 { get; set; }
        public int WinMatchesCount4v4 { get; set; }
        public int Elo4v4 { get; set; }
        public int MatchesCount1v1 { get; set; }
        public int WinMatchesCount1v1 { get; set; }
        public int Elo1v1 {  get; set; }
    }
}
