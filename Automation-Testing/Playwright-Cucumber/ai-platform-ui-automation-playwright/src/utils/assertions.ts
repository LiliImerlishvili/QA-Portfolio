import { expect } from 'chai';
import { APIResponse } from 'playwright';
import { logger } from './logger';

/**
 * Fluent assertion helpers that wrap Chai and add contextual logging.
 */
export class ApiAssertions {
  private readonly response: APIResponse;
  private readonly body: unknown;

  constructor(response: APIResponse, body: unknown) {
    this.response = response;
    this.body = body;
  }

  /** Assert the HTTP status code. */
  hasStatus(expected: number): this {
    const actual = this.response.status();
    if (actual !== expected) {
      logger.error(`Status mismatch: expected ${expected}, got ${actual}`, {
        body: this.body,
      });
    }
    expect(actual, `Expected status ${expected} but got ${actual}`).to.equal(expected);
    return this;
  }

  /** Assert the response body has a specific top-level property. */
  hasProperty(key: string): this {
    expect(this.body, `Expected response body to have property "${key}"`).to.have.property(key);
    return this;
  }

  /** Assert a property equals an expected value. */
  propertyEquals(key: string, value: unknown): this {
    expect((this.body as Record<string, unknown>)[key]).to.deep.equal(value);
    return this;
  }

  /** Assert the response body is an array. */
  isArray(): this {
    expect(this.body).to.be.an('array');
    return this;
  }

  /** Assert the response body array is non-empty. */
  isNonEmptyArray(): this {
    this.isArray();
    expect(this.body as unknown[]).to.have.length.greaterThan(0);
    return this;
  }

  /** Assert a string property matches a regex. */
  propertyMatchesRegex(key: string, pattern: RegExp): this {
    const value = (this.body as Record<string, unknown>)[key];
    expect(typeof value).to.equal('string');
    expect(value as string).to.match(pattern);
    return this;
  }

  /** Assert the response content type contains JSON. */
  isJson(): this {
    const ct = this.response.headers()['content-type'] ?? '';
    expect(ct).to.include('application/json');
    return this;
  }
}

/** Convenience factory. */
export function assertResponse(response: APIResponse, body: unknown): ApiAssertions {
  return new ApiAssertions(response, body);
}
