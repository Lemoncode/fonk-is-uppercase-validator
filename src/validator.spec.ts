import { validator, setErrorMessage } from './validator';

const VALIDATOR_TYPE = 'IS_UPPERCASE';
const DEFAULT_MESSAGE = 'The value must be a uppercase string';

describe('fonk-is-uppercase-validator specs', () => {
  it('should return succeeded validation when it feeds value equals undefined', () => {
    // Arrange
    const value = void 0;

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when it feeds value equals null', () => {
    // Arrange
    const value = null;

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when it feeds value equals empty string', () => {
    // Arrange
    const value = '';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should overwrite default message when it feeds value and message', () => {
    // Arrange
    const value = 'test';
    const message = 'other message';

    // Act
    const result = validator({ value, message });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'other message',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when type of feeds value is number', () => {
    // Arrange
    const value = 1;

    // Act
    const result = validator({
      value,
    });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: DEFAULT_MESSAGE,
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value is true', () => {
    // Arrange
    const value = true;

    // Act
    const result = validator({
      value,
    });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: DEFAULT_MESSAGE,
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value is false', () => {
    // Arrange
    const value = false;

    // Act
    const result = validator({
      value,
    });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: DEFAULT_MESSAGE,
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value is an object', () => {
    // Arrange
    const value = {};

    // Act
    const result = validator({
      value,
    });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: DEFAULT_MESSAGE,
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value is an array', () => {
    // Arrange
    const value = [];

    // Act
    const result = validator({
      value,
    });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: DEFAULT_MESSAGE,
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value is a function', () => {
    // Arrange
    const value = () => null;

    // Act
    const result = validator({
      value,
    });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: DEFAULT_MESSAGE,
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when it feeds value is a uppercase string', () => {
    // Arrange
    const value = 'HELLO TEST';

    // Act
    const result = validator({
      value,
    });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value is not a uppercase string', () => {
    // Arrange
    const value = 'Hello Test';

    // Act
    const result = validator({
      value,
    });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: DEFAULT_MESSAGE,
      type: VALIDATOR_TYPE,
    });
  });

  it('should overwrite default message when it feeds value and calls to setErrorMessage', () => {
    // Arrange
    const value = 'test';

    setErrorMessage('other message');

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'other message',
      type: VALIDATOR_TYPE,
    });
  });
});
