using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System.Threading.Tasks;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Ouakala Abdelaaziz",
                    Email = "ouakala.abdelaaziz@test.dz",
                    UserName = "ouakala.abdelaaziz@test.dz",
                    Address =
                    {
                        FirstName="Ouakala",
                        LastName="Abdelaaziz",
                        Country="Algeria",
                        City="Algeria",
                        State="Algeria",
                        Street="Algeria",
                        ZipCode="02000"
                    }
                };
                await userManager.CreateAsync(user, "#Test01234560");
            }
        }
    }
}
