using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebServer.Api.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Players",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: true),
                    MatchesCount4v4 = table.Column<int>(type: "integer", nullable: false),
                    WinMatchesCount4v4 = table.Column<int>(type: "integer", nullable: false),
                    Elo4v4 = table.Column<int>(type: "integer", nullable: false),
                    MatchesCount1v1 = table.Column<int>(type: "integer", nullable: false),
                    WinMatchesCount1v1 = table.Column<int>(type: "integer", nullable: false),
                    Elo1v1 = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Players", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Players");
        }
    }
}
