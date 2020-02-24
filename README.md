# cryptico

## Overview

Maintained version of cryptico library. The original library is from [Link to original library](https://github.com/phpmycoder/cryptico-node)

### Why this library?

The original library is not maintained anymore. Its a great library for RSA, but as it was written quite a long time ago, it needs to be improved. I would have rather posted a PR but they won't merge it. So I made this to add the functionalities that I want :)

### Added features

1. You can encrypt javscript objects

The original library won't take objects to encrypt them. You can do that with this library.

2. You can stringify private keys, and revert them back to keys.

The original library won't parse the stringified private keys correctly to revert them back to the private key. You can do that with this library.

### Usage

I will document only the added features API, for complete usage refer to the original library.

1. Import it

```javascript
var cryptico = require('./cryptico-es6');
```

2. Object encryption

```javascript
var senderPrivateKey = cryptico.generateRSAKey('AnyPasword', 1024);

var senderPublicKeyString = cryptico.publicKeyString(senderPrivateKey);

//Won't work with original library.
var Msg = {
    first: 'first string',
    second: 'second string',
    third: 'third string'
};

var senderSideEncryption = cryptico.encrypt(Msg, senderPublicKeyString);
```
3. stringify and then revert the private key

Based upon the awesome answer on [Stackoverflow](https://stackoverflow.com/questions/27637516/save-rsa-key-object-from-cryptico-js).

```javascript
var senderPrivateKey = cryptico.generateRSAKey('AnyPasword', 1024);
var senderPublicKeyString = cryptico.publicKeyString(senderPrivateKey);

var stringKey = JSON.stringify(senderPrivateKey.toJSON());

//API
var parsedkey = cryptico.RSAParse(stringKey);

```

I by no means own this library. This library is property of original authors :)
