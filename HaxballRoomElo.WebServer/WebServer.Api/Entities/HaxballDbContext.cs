using Microsoft.EntityFrameworkCore;

namespace WebServer.Api.Entities
{
    public class HaxballDbContext : DbContext
    {
        public HaxballDbContext(DbContextOptions options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Player>()
                .HasKey(p => p.Id);

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Player> Players { get; set; }
    }
}
