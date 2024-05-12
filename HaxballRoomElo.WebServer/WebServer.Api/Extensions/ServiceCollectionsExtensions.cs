using Microsoft.EntityFrameworkCore;

namespace WebServer.Api.Extensions
{
    public static class ServiceCollectionsExtensions
    {
        public static IServiceCollection AddPostgresDbContext<TContext>(this IServiceCollection services, string connectionString)
        where TContext : DbContext
        {
            services.AddDbContext<TContext>((serviceProvider, dbContextOptionsBuilder) =>
            {
                dbContextOptionsBuilder.UseNpgsql(
                    serviceProvider.GetRequiredService<IConfiguration>().GetConnectionString(connectionString),
                    npgsqlOptionsBuilder =>
                        npgsqlOptionsBuilder.MigrationsAssembly(typeof(TContext).Assembly.FullName));
            });

            return services;
        }
    }
}
