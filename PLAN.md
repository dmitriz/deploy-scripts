# Deployment Scripts Extraction Plan

We will extract reusable deployment scripts from the `ansible-test` repository following Test-Driven Development (TDD). Each functional change will be small and incremental. 

## Goals
- Write tests first for each step, and only for the current step.
- Do not implement the script for a step until all previous scripts and tests are passing.
- At every step, remove any unnecessary scripts or tests before starting a new one.
- Move functionality from provisioning files to reusable scripts, one at a time.
- Keep changes minimal and focused.
- Document steps in this plan with checkboxes

## Steps

1. [x] Initialize repository
   - [x] Create `.gitignore`
   - [x] Create `README.md`
   - [x] Create `PLAN.md` (this document)
   - [x] Import provisioning instructions from `ansible-test/PROVISIONING_STEPS.md`

2. [x] Set up testing framework
   - [x] Choose testing tool (e.g., Jest)
   - [x] Add test directory: `tests/`

3. [ ] Extract environment setup script
   - [ ] Write test for environment setup: `tests/env_setup.test.js`
   - [ ] Create `scripts/env_setup.js` and implement to pass test

4. [ ] Extract package installation script
   - [ ] Write test for package installation: `tests/install_packages.test.js`
   - [ ] Create `scripts/install_packages.js` and implement

5. [ ] Extract user and group management script
   - [ ] Write test for user creation: `tests/manage_users.test.js`
   - [ ] Create `scripts/manage_users.js` and implement

6. [ ] Extract service configuration script
   - [ ] Write test for service config: `tests/configure_service.test.js`
   - [ ] Create `scripts/configure_service.js` and implement

7. [ ] Integrate scripts in provisioning workflow
   - [ ] Update `ansible-test` playbooks to call reusable scripts
   - [ ] Write integration tests: `tests/integration.test.js`

8. [ ] Review and finalize
   - [ ] Code review
   - [ ] Merge to main branch
