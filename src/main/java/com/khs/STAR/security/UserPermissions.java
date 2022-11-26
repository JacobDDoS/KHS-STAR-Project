package com.khs.STAR.security;

public enum UserPermissions {

    WRITE_AUTHORITY("all:write");

    private final String permission;

    UserPermissions(String permission) {
        this.permission = permission;
    }

    public String getPermission() {
        return permission;
    }
}
