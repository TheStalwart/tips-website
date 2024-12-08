# SSHd 2FA

Harden SSHd with Google Authenticator 2FA.

Written after discovering every existing tutorial is outdated and things have changed for Debian/Raspbian 12 Bookworm.

## Recommended prerequisite

Have two accounts (or client machines) to log into the target machine you're about to reconfigure. Set up one of them to authenticate via `authorized_keys` as a fallback - correctly configured key pair setup will let you in even if 2FA setup is misconfigured.

## Install required packages

```bash
sudo apt install libpam-google-authenticator
```

## Generate a 2FA configuration

As a _user to log into_ (not root) run `google-authenticator` command and go through the process.

## Set up PAM

Add the following line to `/etc/pam.d/sshd` to add a 2FA step to SSH login process:

```bash
auth required pam_google_authenticator.so
```

Whether SSHd will require 2FA Verification Code first, _then_ password, or password first, _then_ 2FA code, is defined by inserting the line above _before_ or _after_ the following line:

```bash
@include common-auth
```

If you're experiencing issues after the setup, enabling debug mode is possible by adding a `debug` suffix:

```bash
auth required pam_google_authenticator.so debug
```

## Set up SSHd

Edit `/etc/ssh/sshd_config` to enable the following features, or add the lines anywhere in the file if they're missing:

```bash
ChallengeResponseAuthentication yes
KbdInteractiveAuthentication yes
```

## Restart SSHd and test

```bash
sudo systemctl restart sshd.service
```

Attempt to log into the target machine from the account/machine that is _not_ set up with `authorized_keys`. If login fails, inspect logs using the following command:

```bash
journalctl | grep pam_google
```
