# Deployment Scripts Extraction Plan

We will extract reusable deployment scripts from the `ansible-test` repository following Test-Driven Development (TDD). Each functional change will be small and incremental. 

## Goals
- Write tests first for each script
- Move functionality from provisioning files to reusable scripts
- Keep changes minimal and focused
- Document steps in this plan with checkboxes

## Steps

1. [ ] Initialize repository
   - [ ] Create `.gitignore` (done)
   - [ ] Create `README.md` (done)
   - [ ] Create `PLAN.md` (this document)

2. [ ] Set up testing framework
   - [ ] Choose testing tool (e.g., [bats](https://github.com/bats-core/bats-core) for shell scripts)
   - [ ] Add test directory: `tests/`
   - [ ] Write initial test file: `tests/sample_test.bats`

3. [ ] Extract environment setup script
   - [ ] Write test for environment setup: `tests/env_setup.bats`
   - [ ] Create `scripts/env_setup.sh` and implement to pass test

4. [ ] Extract package installation script
   - [ ] Write test for package installation: `tests/install_packages.bats`
   - [ ] Create `scripts/install_packages.sh` and implement

5. [ ] Extract user and group management script
   - [ ] Write test for user creation: `tests/manage_users.bats`
   - [ ] Create `scripts/manage_users.sh` and implement

6. [ ] Extract service configuration script
   - [ ] Write test for service config: `tests/configure_service.bats`
   - [ ] Create `scripts/configure_service.sh` and implement

7. [ ] Integrate scripts in provisioning workflow
   - [ ] Update `ansible-test` playbooks to call reusable scripts
   - [ ] Write integration tests: `tests/integration.bats`

8. [ ] Review and finalize
   - [ ] Code review
   - [ ] Merge to main branch

