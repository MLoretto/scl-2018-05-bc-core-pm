
describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
  
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33),'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    //Se realiza test para minisculas.
    it('debería retornar "defghijklmnopqrstuvwxyzabc" para "abcdefghijklmnopqrstuvwxyz" con offset 55', () => {
      assert.equal(cipher.encode('abcdefghijklmnopqrstuvwxyz',55),'defghijklmnopqrstuvwxyzabc');
    });

    //Se realiza un test combinado.
    it('debería retornar "DeFgHiJkLmNoPqRsTuVwXyZaBc" para "AbCdEfGhIjKlMnOpQrStUvWxYz" con offset 55', () => {
      assert.equal(cipher.encode('AbCdEfGhIjKlMnOpQrStUvWxYz', 55),'DeFgHiJkLmNoPqRsTuVwXyZaBc');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
  
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG', 33),'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    //Se realiza test para minisculas.
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "defghijklmnopqrstuvwxyzabc" con offset 55', () => {
      assert.equal(cipher.decode('defghijklmnopqrstuvwxyzabc', 55),'abcdefghijklmnopqrstuvwxyz');
    });
    
    //Se realiza un test combinado.
    it('debería retornar "AbCdEfGhIjKlMnOpQrStUvWxYz" para "DeFgHiJkLmNoPqRsTuVwXyZaBc" con offset 55', () => {
      assert.equal(cipher.decode('DeFgHiJkLmNoPqRsTuVwXyZaBc', 55),'AbCdEfGhIjKlMnOpQrStUvWxYz');
    });
  });

});

/* NO FUNCIONO :(
describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
  
    it('debería retornar "fghijklmnñopqrstuvwxyz12345" para "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33),'fghijklmnñopqrstuvwxyz12345');
    });

    //Se realiza test para minisculas.
    it('debería retornar "234567890áéíóú.,ABCDEFGHIJK" para "abcdefghijklmnñopqrstuvwxyz" con offset 100', () => {
      assert.equal(cipher.encode('abcdefghijklmnñopqrstuvwxyz', 100),'234567890áéíóú.,ABCDEFGHIJK');
    });

    //Se realiza un test combinado.
    it('debería retornar "V3quzrs37qváqcrx5Nwzt7" para "El diablo es Magnífico" con offset 666', () => {
      assert.equal(cipher.encode('El diablo es Magnífico', 666),'V3quzrs37qváqcrx5Nwzt7');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
  
    it('debería retornar "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ" para "fghijklmnñopqrstuvwxyz12345" con offset 33', () => {
      assert.equal(cipher.decode('fghijklmnñopqrstuvwxyz12345', 33),'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    //Se realiza test para minisculas.
    it('debería retornar "abcdefghijklmnñopqrstuvwxyz" para "234567890áéíóú.,ABCDEFGHIJK" con offset 100', () => {
      assert.equal(cipher.encode('234567890áéíóú.,ABCDEFGHIJK', 100),'abcdefghijklmnñopqrstuvwxyz');
    });
    
    //Se realiza un test combinado.
    it('debería retornar "El diablo es Magnífico" para "V3quzrs37qváqcrx5Nwzt7" con offset 666', () => {
      assert.equal(cipher.encode('V3quzrs37qváqcrx5Nwzt7', 666),'El diablo es Magnífico');
    });
  });

});
*/