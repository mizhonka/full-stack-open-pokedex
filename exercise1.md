## 11.1.

A team of 6 people is coding an application in Python. They need to setup a CI system and pick tools for linting, testing and building the app.

First, to manage dependencies, they could utilize **Poetry**. This makes adding new tools easy, and installing everything happens simply by running _poetry install_. 
Building the app is possible with _poetry build_. Different 'tasks' can be defined to run certain commands with _poetry run_.  

For linting, the static code analyser **Pylint** could be used. Another tool called **autopep8** automatically formats the code to match the PEP 8 standard. 

**Pytest** framework is used for creating and running unit tests with Python. If needed, a coverage report can be created and hosted with a service such as Codecov. This can help to make sure that individual components in the app are thoroughly tested.

Other services for setting up a CI pipeline besides GitHub Actions and Jenkins include **CloudBees CI**, **Teamcity** and **Travis CI**.

Choosing between a self-hosted and a cloud-based system depends on how much control over the system is needed, 
how much resources go into building and what the pricing is like. In a relatively small app - such as the one is question with 6 people on the team - I would go with a cloud-based system. 
