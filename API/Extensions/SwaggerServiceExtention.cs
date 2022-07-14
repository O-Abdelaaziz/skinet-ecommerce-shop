using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using System;

namespace API.Extensions
{
    public static class SwaggerServiceExtention
    {
        public static IServiceCollection AddSwaggerServiceExtention(this IServiceCollection services)
        {
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "skinet-ecommerce-shop",
                    Description = "An FullStack Applicaton using ASP.NET Core Web API & Angular 14 for managing an ecommerce shop",
                    TermsOfService = new Uri("https://github.com/O-Abdelaaziz/skinet-ecommerce-shop"),
                    Contact = new OpenApiContact
                    {
                        Name = "abdelaaziz-ouakala",
                        Url = new Uri("https://www.linkedin.com/in/abdelaaziz-ouakala/")
                    },
                    License = new OpenApiLicense
                    {
                        Name = "License abdelaaziz-ouakala",
                        Url = new Uri("http://ouakala-abdelaaziz.epizy.com/")
                    }
                });
            });

            return services;
        }

        public static IApplicationBuilder UseSwaggerDocumentation(this IApplicationBuilder application)
        {
            //if (env.IsDevelopment())
            //{
            //app.UseDeveloperExceptionPage();
            application.UseSwagger();
            application.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "API v1"));
            //}
            return application;
        }
    }
}
