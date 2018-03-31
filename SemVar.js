class SemVar {
    constructor(major, minor, patch, preRelease, metadata) {
        // Assume user is inputing arguments as strings
        // Assume user is inputing valid strings
        this.major = major
        this.minor = minor
        this.patch = patch
        // Assume user is adding a '-' to start preRelease as per spec
        this.preRelease = preRelease
        // Assume user is adding a '+' to start metadata as per spec
        this.metadata = metadata
    }

    // 'string described in the specification' from technical challenge implies valid semvar string
    // so no validity checks are performed
    static parse(semvarString) {
        const majorMinorPatchAndPreReleaseMetadataArray = semvarString.split('-', 2)
        const majorMinorPatchString = majorMinorPatchAndPreReleaseMetadataArray[0]
        const preReleaseMetadataString = majorMinorPatchAndPreReleaseMetadataArray[1]

        const preReleaseAndMetadataArray = preReleaseMetadataString.split('+')
        const preReleaseString = preReleaseAndMetadataArray[0]
        const metadataString = preReleaseAndMetadataArray[1]

        const [majorString, minorString, patchString] = majorMinorPatchString.split('.')

        return new SemVar(majorString, minorString, patchString, '-' + preReleaseString, '+' + metadataString)
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