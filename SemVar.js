class SemVar {
    constructor(major, minor, patch, preRelease, metadata) {
        // Assume user is inputing arguments as strings
        // Assume user is inputing valid strings
        this.major = major
        this.minor = minor
        this.patch = patch
        // Assume user is adding a hyphen to start preRelease as per spec
        this.preRelease = preRelease
        // Assume user is adding a '+' to start metadata as per spec
        this.metadata = metadata
    }

    getMajor() {
        return this.major
    }

    getMinor() {
        return this.minor
    }

    getPatch() {
        return this.patch
    }

    getPreRelease() {
        return this.preRelease
    }

    getMetadata() {
        return this.metadata
    }

}

module.exports = SemVar