# Deployment Scripts Extraction Plan

We will extract reusable deployment scripts from the `ansible-test` repository following Test-Driven Development (TDD). Each functional change will be small and incremental. 

## Goals
- Write tests first for each step
- Move functionality from provisioning files to reusable scripts
- Keep changes minimal and focused
- Document steps in this plan with checkboxes

## Steps

1. [ ] Initialize repository
   - [ ] Create `.gitignore` (done)
   - [ ] Create `README.md` (done)
   - [ ] Create `PLAN.md` (this document)
   - [ ] Import provisioning instructions from `ansible-test/PROVISIONING_STEPS.md`

2. [ ] Set up testing framework
   - [ ] Choose testing tool (e.g., Jest)
   - [ ] Add test directory: `tests/`
   - [ ] Write initial test files (e.g., `tests/sample.test.js`)

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
