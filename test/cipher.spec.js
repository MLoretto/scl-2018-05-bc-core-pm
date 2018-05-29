
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
      assert.equal(cipher.encode('abcdefghijklmnopqrstuvwxyz', 55),'defghijklmnopqrstuvwxyzabc');
    });

    //Se realiza un test combinado.
    it('debería retornar "dEfGhIjKlMnOpQrStUvWxYzAbC" para "AbCdEfGhIjKlMnOpQrStUvWxYz" con offset 55', () => {
      assert.equal(cipher.encode('AbCdEfGhIjKlMnOpQrStUvWxYz', 55),'dEfGhIjKlMnOpQrStUvWxYzAbC');
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
      assert.equal(cipher.encode('defghijklmnopqrstuvwxyzabc', 55),'abcdefghijklmnopqrstuvwxyz');
    });
    
    //Se realiza un test combinado.
    it('debería retornar "AbCdEfGhIjKlMnOpQrStUvWxYz" para "dEfGhIjKlMnOpQrStUvWxYzAbC" con offset 55', () => {
      assert.equal(cipher.encode('dEfGhIjKlMnOpQrStUvWxYzAbC', 55),'AbCdEfGhIjKlMnOpQrStUvWxYz');
    });
  });

});