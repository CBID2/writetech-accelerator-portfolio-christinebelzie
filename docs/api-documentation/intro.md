# API Documentation Project

This project documents the [Chimoney public REST API](https://chimoney.io/), including a Getting Started section and selected endpoints.

## What I Improved

- **Improved Onboarding:** The `getting-started.md` page is a single, concise guide for new users. It includes example cURL requests to help developers make their first API call easily.
- **Structured Endpoint Pages:** Each endpoint now has its own page with a consistent layout. We use tables for clear organization and code blocks to display requests and responses.

## What I Learnt

- **How to interpret machine-readable specifications:** I learned that files like OpenAPI (formerly Swagger) specifications are not just for human readers but are the backbone for automated tooling. This "contract-first" approach ensures that documentation, server code, and client libraries are all synchronized.

- **Using plugins to automate workflows:** I gained hands-on experience using [the `openapi-docs` Docusaurus plugin](https://docusaurus-openapi.tryingpan.dev/) to automate the documentation process. Unfortunately, too many configuration errors and plugin-specific bugs caused the entire build process to fail, so I wrote the endpoints by hand.
