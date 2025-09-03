# Automation Workflows Project

This project demonstrates the implementation of automated quality assurance tools for documentation, including Vale for prose linting and Spectral for API specification validation.

## What I Set Up

- **Vale Prose Linting**: Implemented automated Markdown content validation using multiple style packages (Google, proselint, write-good, alex, Joblint) to ensure consistent writing quality across all documentation files
- **Spectral API Validation**: Configured OpenAPI specification linting to enforce API documentation standards and best practices for all YAML/YML files in the repository  
- **Redocly Documentation Generation**: Integrated automated static HTML documentation generation from OpenAPI specifications, creating professional interactive API reference materials
- **GitHub Actions Workflows**: Created three separate workflows (.github/workflows/vale.yml, spectral.yml, practice.yml) that trigger on pushes and pull requests to provide immediate feedback on documentation quality
- **Broken Link Detection**: Added markdown link checking to prevent broken external references in documentation

## What I Improved

- **Documentation Quality Consistency**: The automation now catches writing issues like repetitive words, passive voice, and style inconsistencies that I would miss in manual reviews, ensuring all content meets professional standards
- **API Documentation Reliability**: Spectral validation prevents incomplete or poorly structured OpenAPI specifications from being merged, while Redocly automatically generates up-to-date, interactive documentation that developers can actually use
- **Development Workflow Efficiency**: Moving from manual documentation reviews to automated checks in CI/CD saves significant time and provides immediate feedback during the development process
- **Team Collaboration**: Pull request integration means documentation quality issues are caught and discussed before content is merged, improving overall team communication around documentation standards

## Rules and Standards Enforced

- **Writing Style Standards**: Google Style Guide rules for capitalization, Oxford comma usage, active voice preference, and avoidance of first-person plural language
- **Content Quality Rules**: Proselint and write-good packages enforce removal of unnecessary qualifiers (like "very"), identify wordy constructions, flag weasel words, and promote clear, direct communication
- **Inclusive Language Standards**: Alex package catches potentially insensitive language while Joblint ensures job-related content uses inclusive, unbiased terminology
- **API Documentation Standards**: Spectral enforces OpenAPI best practices including required contact information, operation descriptions, unique operation IDs, proper parameter documentation, and consistent response handling
- **Technical Documentation Structure**: Path validation, trailing slash removal, parameter consistency, and comprehensive schema documentation requirements

## Challenges I Faced

- **Vale Configuration Complexity**: Managing five different style packages with potentially conflicting rules required careful configuration tuning. I solved this by systematically testing each package, adjusting rule severity levels, and creating a custom .vale.ini that balanced comprehensive checking with practical usability
- **GitHub Actions Learning Curve**: Understanding YAML syntax, workflow triggers, job dependencies, and artifact handling was initially overwhelming. I addressed this by creating a simple practice workflow first to experiment with basic concepts before building the complex Vale and Spectral workflows
- **File Path and Structure Management**: Ensuring workflows correctly targeted files across different directory structures (my automation-workflows vs docs-automation folder naming) required careful attention to glob patterns and explicit path specifications to avoid workflow failures
- **OpenAPI Specification Creation**: Writing a comprehensive API specification that passes all Spectral validation rules was more challenging than expected. I solved this through iterative development, using Spectral's feedback to improve the specification structure and completeness

## What I Learned

- **Automation Strategy & GitHub Actions**: I learned to approach documentation quality as a systematic process rather than manual checking, while gaining practical CI/CD experience with workflow triggers, job dependencies, and artifact management
- **API Documentation & Tool Integration**: Through working with OpenAPI specifications and Spectral validation, I learned industry standards for API documentation and discovered that successful automation comes from how tools work together rather than individual tool capabilities
