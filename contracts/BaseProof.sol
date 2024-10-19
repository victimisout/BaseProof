// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BaseProof {
    struct Document {
        uint256 timestamp;
        bytes32 fileHash;
    }

    mapping(bytes32 => Document) public documents;

    event DocumentAdded(bytes32 fileHash, uint256 timestamp);

    function addDocument(bytes32 fileHash) external {
        require(documents[fileHash].timestamp == 0, "Document already exists");

        documents[fileHash] = Document(block.timestamp, fileHash);
        emit DocumentAdded(fileHash, block.timestamp);
    }

    function verifyDocument(bytes32 fileHash) external view returns (uint256) {
        require(documents[fileHash].timestamp != 0, "Document does not exist");
        return documents[fileHash].timestamp;
    }
}
