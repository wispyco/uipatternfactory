#!/bin/bash

# Variables (Modify these according to your setup)
REMOTE_NAME="agency7-ca"
REMOTE_URL="git@github.com:wispyco/agency7-ca.git"
REMOTE_BRANCH="main"
LOCAL_BRANCH="agency7-ca-main"
SUBTREE_PATH="components/experiments"
SUBTREE_BRANCH="agency-ca-experiments"
TARGET_PREFIX="components/agency7-experiments"  # Replace with your desired path
WORKING_BRANCH="$(git rev-parse --abbrev-ref HEAD)"  # Current branch

# Function to display messages
log() {
    echo "[update_subtree] $1"
}

# Ensure we're in the repository's root directory
cd "$(git rev-parse --show-toplevel)"

# Add remote if it doesn't exist
if ! git remote | grep -q "^$REMOTE_NAME$"; then
    log "Adding remote '$REMOTE_NAME'"
    git remote add "$REMOTE_NAME" "$REMOTE_URL"
fi

# Fetch updates from the remote repository
log "Fetching updates from '$REMOTE_NAME'"
git fetch "$REMOTE_NAME"

# Check if local tracking branch exists, create if not
if ! git rev-parse --verify "$LOCAL_BRANCH" >/dev/null 2>&1; then
    log "Creating local branch '$LOCAL_BRANCH' tracking '$REMOTE_NAME/$REMOTE_BRANCH'"
    git branch "$LOCAL_BRANCH" "$REMOTE_NAME/$REMOTE_BRANCH"
fi

# Update your local branch
log "Checking out '$LOCAL_BRANCH'"
git checkout "$LOCAL_BRANCH"
log "Pulling latest changes into '$LOCAL_BRANCH'"
git pull "$REMOTE_NAME" "$REMOTE_BRANCH"

# Resplit the subtree
log "Splitting subtree '$SUBTREE_PATH' into branch '$SUBTREE_BRANCH'"
git subtree split -P "$SUBTREE_PATH" -b "$SUBTREE_BRANCH"

# Switch back to your working branch
log "Switching back to '$WORKING_BRANCH'"
git checkout "$WORKING_BRANCH"

# Pull the updates into your subtree
log "Pulling updates into subtree at '$TARGET_PREFIX'"
git subtree pull --prefix="$TARGET_PREFIX" "$SUBTREE_BRANCH" --squash

# Delete the temporary subtree branch
log "Deleting temporary branch '$SUBTREE_BRANCH'"
git branch -D "$SUBTREE_BRANCH"

log "Subtree update complete."