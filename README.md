# deploy-scripts

A collection of reusable deployment scripts extracted from ansible-test. We follow strict TDD: write tests first, then implementation.

## Ansible Installation

> **Note:** Ansible is not required for the current scripts, but will be needed for some scripts in the future. You do not need to install it yet unless you plan to use those features.

If you want to prepare for future scripts that integrate with Ansible, you can install the main Ansible package using apt (recommended for most Linux distributions):

```bash
sudo apt update
sudo apt install ansible
```

For more details, see the [Ansible installation guide](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html).
