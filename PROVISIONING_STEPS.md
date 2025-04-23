# DigitalOcean Droplet Provisioning Plan

This checklist documents all steps for reliably provisioning droplets using the new script, so progress is not lost if there are crashes.

## Configuration Requirement

All provisioning configuration (such as max, type, etc.) must be stored in the config.env file in env format. Do not use JSON or any other config files for this project.

## 📝 Provisioning Steps

- [x] **Step 1: Install Dependencies**
    - [x] Install `digitalocean-js@2.1.2` via npm.
- [x] **Step 2: Set Up API Token**
    - [x] Go to the [DigitalOcean API Tokens page](https://cloud.digitalocean.com/account/api/tokens).
    - [x] Click "Generate New Token".
    - [x] Give your token a name (e.g., "Provisioning Script").
    - [x] Select the required scopes (read/write for droplets).
    - [x] Click "Generate Token" and copy the token. **You will not be able to see it again!**
- [x] **Step 3: Configure Script Parameters**
    - [x] Decide the maximum number of droplets allowed (`--max` / DROPLET_MAX_COUNT).
    - [x] Decide droplet type/size slug (`--type`).
    - [x] Optionally prepare other droplet options: name, region, image.
- [x] **Step 4: Run the Provisioning Script**
    - [x] Ensure all configuration (max, type, name, region, image, etc.) is set in `config.env` as environment variables.
    - [x] Run: `node scripts/do-provision.js`
        - [x] Script aborts with an error if the maximum number of droplets is reached.
        - [x] Script successfully provisions a new droplet if under the limit.
        - [x] Update the new droplet IP address in the relevant configuration files or documentation.
    - [x] If any environment variable is missing, the script will prompt you interactively to provide it.
---

- [ ] **If you encounter a crash, return here and check off completed steps to resume reliably!**
