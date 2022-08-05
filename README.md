# Skinet E-Commerce Application
## Using Angular & .Net Core 5

E-commerce application with .Net Core using Generic Repository with Specification Pattern / Angular10 / Redis cache / Stripe payments.
This application is a proof of concept E-Commerce store using .net core web api and client side front-end Angular UI for the store using the Angular CLI. Some highlights of the project are following:

- use the Repository, Unit of Work and specification pattern in .net core
- Automapper in ASP.NET Core
- Paging, Sorting, Searching and Filtering
- Created custom middleware to handle 500 Internal server errors
- Created mechanism to return all sort of errors like 401(Un-Authorized), 404( Bad-request - Not found ), 400( model Validation error ), 500( Internal Server error ) into a common object which has status and response properties.
- Best OOPS practices used.
- Added Generic Pagination class that can be used with any Entity to get paged results.
- Integrated Swagger API documentation to allow client application developer to get the type of request and response for each API. Also customized the swagger documentation as per need.
- Created extension methods to extend the IApplicationBuilder and IServiceCollection so that common code can be moved from startup class into these new extension methods, the purpose is to clean the startup class.

## Features
- API Generic Repository Module
- Creating a generic repository.
- Specification pattern.
- Using the specification.
- Using the debugger.
- Shaping data (DTOs).
- Using AutoMapper.
- Using Redis Database
- Serving static content from API(wwwroot folder).

## Installation

Skinet E-Commerce Application requires [Node.js](https://nodejs.org/) v16.13.0+ to run, .Net Core (v5)

Install the dependencies and devDependencies and start the server.

```sh
cd skinet-ecommerce-shop
cd client
npm i
ng serve --open
```

## Commands Used

Skinet E-Commerce Application .Net Core (v5) used some of this commands for better interaction with cli.

```sh
# Drop DataBase
dotnet ef database drop -p Infrastructure -s API
# Generate Migrations
dotnet ef migrations add InitialCreate -p  Infrastructure -s API -o Data/Migrations
# Delete Migrations Folder
dotnet ef migrations remove -p Infrastructure -s API
```

## Project Architecture
![alt text](https://i55.servimg.com/u/f55/13/79/70/03/115.png "project architecture")

[⬆ back to top](#skinet-e-commerce-application)

## The Repository Pattern
The Repository Design Pattern in C# Mediates between the domain and the data mapping layers using a collection-like interface for accessing the domain objects. In other words, we can say that a Repository Design Pattern acts as a middleman or middle layer between the rest of the application and the data access logic.

![alt text](https://i55.servimg.com/u/f55/13/79/70/03/014.png "the repository pattern")

[⬆ back to top](#skinet-e-commerce-application)

## The Repository pattern Goals
- Decouple business code from  data access.
- Separation of concerns from our controllers and our context as well.
- Minimise dublicate query logic.
- Testability (create mock of a repository & store context).

## The Repository pattern consequences
- Increased level of abstraction.
- Increased maintainability, flexibility, testability.
- More classes/interfaces - less dublicate code.
- Busnisess logic further away from the data.
- Harder to opimise certain operations against the data source.

## Using Redis Goal
- To set up and configurer redis to
- Store the customer basket in 
- Server memory and create the supporing repository and controller.

## Why?
- In-memory data structure store
- Supports String, hashes, lists, sets, etc
- Key/Value store based
- Fast
- Persists data by using snapshots every munite
- Data can be giventime to live
- Great for caching data

## Libraries

Skinet E-Commerce Application is currently created with the following libraries.
Instructions on how to use them in your own application are linked below.

| Plugin | NPM | Version |
| ------ | ------ | ------ |
| bootstrap | [https://www.npmjs.com/package/bootstrap][BOOTSTRAP] | ^4.6.0
| bootswatch | [https://www.npmjs.com/package/bootswatch][BOOTSWATCH] | ^4.6.0
| font-awesome | [https://www.npmjs.com/package/font-awesome][FONT_AWESOME] | ^4.7.0
| gsap | [https://www.npmjs.com/package/gsap][GSAP] | ^3.10.4
| ngx-bootstrap | [https://www.npmjs.com/package/ngx-bootstrap][NGX_BOOTSTRAP] | ^8.0.0
| ngx-spinner | [https://www.npmjs.com/package/ngx-spinner][NGX_SPINNER] | ^13.0.0
| xng-breadcrumb | [https://www.npmjs.com/package/xng-breadcrumb][XNG_BREADCRUMB] | ^7.2.0
| angular-notifier | [https://www.npmjs.com/package/angular-notifier][ANGULAR_NOTIFIER] | ^11.0.0

> Note:  you cand find more in `package.json` file.

[⬆ back to top](#skinet-e-commerce-application)

## Screenshots
##### Login Page
![alt text](https://i55.servimg.com/u/f55/13/79/70/03/213.png "login page")
[⬆ back to top](#skinet-e-commerce-application)

##### Register Page
![alt text](https://i55.servimg.com/u/f55/13/79/70/03/313.png "register page")
[⬆ back to top](#skinet-e-commerce-application)

##### Shop Page
![alt text](https://i55.servimg.com/u/f55/13/79/70/03/413.png "shop page")
[⬆ back to top](#skinet-e-commerce-application)

##### Basket Page
![alt text](https://i55.servimg.com/u/f55/13/79/70/03/513.png "basket page")
[⬆ back to top](#skinet-e-commerce-application)

##### Chektout Page (address)
![alt text](https://i55.servimg.com/u/f55/13/79/70/03/613.png "chektout page address")
[⬆ back to top](#skinet-e-commerce-application)

##### Chektout Page (delivery)
![alt text](https://i55.servimg.com/u/f55/13/79/70/03/711.png "chektout page delivery")
[⬆ back to top](#skinet-e-commerce-application)

##### Chektout Page (review)
![alt text](https://i55.servimg.com/u/f55/13/79/70/03/810.png "chektout page review")
[⬆ back to top](#skinet-e-commerce-application)

##### Chektout Page (payement)
![alt text](https://i55.servimg.com/u/f55/13/79/70/03/912.png "chektout page payement")
[⬆ back to top](#skinet-e-commerce-application)

##### Success Payment Page
![alt text](https://i55.servimg.com/u/f55/13/79/70/03/1011.png "success payment  page")
[⬆ back to top](#skinet-e-commerce-application)

##### Order Products After Payement
![alt text](https://i55.servimg.com/u/f55/13/79/70/03/1110.png "order products after payement")
[⬆ back to top](#skinet-e-commerce-application)

##### Error Page
![alt text](https://i55.servimg.com/u/f55/13/79/70/03/1210.png "error page")
[⬆ back to top](#skinet-e-commerce-application)

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[dill]: <https://github.com/joemccann/dillinger>
[git-repo-url]: <https://github.com/joemccann/dillinger.git>
[john gruber]: <http://daringfireball.net>
[df1]: <http://daringfireball.net/projects/markdown/>
[markdown-it]: <https://github.com/markdown-it/markdown-it>
[Ace Editor]: <http://ace.ajax.org>
[node.js]: <http://nodejs.org>
[Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
[jQuery]: <http://jquery.com>
[@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
[express]: <http://expressjs.com>
[AngularJS]: <http://angularjs.org>
[Gulp]: <http://gulpjs.com>

[BOOTSTRAP]: <https://www.npmjs.com/package/bootstrap>
[BOOTSWATCH]: <https://www.npmjs.com/package/bootswatch>
[FONT_AWESOME]: <https://www.npmjs.com/package/font-awesome>
[GSAP]: <https://www.npmjs.com/package/gsap>
[NGX_BOOTSTRAP]: <https://www.npmjs.com/package/ngx-bootstrap>
[NGX_SPINNER]: <https://www.npmjs.com/package/ngx-spinner>
[XNG_BREADCRUMB]: <https://www.npmjs.com/package/xng-breadcrumb>
[ANGULAR_NOTIFIER]: <https://www.npmjs.com/package/angular-notifier>
