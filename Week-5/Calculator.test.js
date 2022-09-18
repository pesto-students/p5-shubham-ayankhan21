const mathOperations = require('./Calculator');

    test('Adding 1 + 2 should return 3', () => {
      let result = mathOperations.sum(1,2)
      expect(result).toBe(3);
    });
    
    test("Subtracting 2 from 10 should return 8", () => {
      let result = mathOperations.diff(10,2)
      expect(result).toBe(8);
    });
    
    test("Multiplying 2 and 8 should return 16", () => {
      let result = mathOperations.product(2,8)
      expect(result).toBe(16);
    });
  