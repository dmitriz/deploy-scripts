# Deployment Scripts Extraction Plan

We will extract reusable deployment scripts from the `ansible-test` repository following Test-Driven Development (TDD). Each functional change will be small and incremental. 

## Instructions
- All scripts and helpers must be implemented as pure functions that take a single object as an argument.
- Always import the script to be tested at the top of the test file (not inside the test function).
- Use CommonJS `require` for imports in tests and scripts.
- Write tests first for each step, and only for the current step.
- Do not implement or keep any script for a step before its test is approved and accepted. Only after the test is reviewed and accepted, implement the script for that step.
- Do not implement the script for a step until all previous scripts and tests are passing.
- At every step, remove any unnecessary scripts or tests before starting a new one.
- Move functionality from provisioning files to reusable scripts, one at a time.
- Keep changes minimal and focused.
- Document steps in this plan with checkboxes

## Steps

1. [ ] Extract provisioning functionality
   - [ ] Identify key provisioning tasks (e.g., SSH connectivity, package installation, service configuration)
   - [ ] Write unit test for first helper: `scripts/connectSSH.test.js`
   - [ ] Implement helper function: `scripts/connectSSH.js`
   - [ ] Write unit test for next helper: `scripts/installDependencies.test.js`
   - [ ] Implement helper function: `scripts/installDependencies.js`
   - [ ] Write integration test for provisioning pipeline: `scripts/provision.test.js`
   - [ ] Implement provisioning wrapper: `scripts/provision.js`
   - [ ] Verify end-to-end provisioning with a playbook stub

2. [ ] Extract installation functionality
   - [ ] Write test for installation: `scripts/install.test.js`
   - [ ] Implement installation wrapper: `scripts/install.js`

3. [ ] Integrate scripts
   - [ ] Place integration tests next to scripts
   - [ ] Document usage in README.md

4. [ ] Review & finalize
   - [ ] Code review
   - [ ] Merge to main branch

**Note:** Ansible playbooks in `playbooks/` are not modified.
