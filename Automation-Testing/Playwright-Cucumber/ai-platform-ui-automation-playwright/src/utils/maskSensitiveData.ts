export function maskSensitiveData(data: unknown): unknown {
  if (!data || typeof data !== 'object') {
    return data;
  }

  const cloned = JSON.parse(JSON.stringify(data));

  const sensitiveKeys = [
    'accessToken',
    'refreshToken',
    'token',
    'authorization',
  ];

  function mask(obj: any) {
    if (!obj || typeof obj !== 'object') {
      return;
    }

    for (const key of Object.keys(obj)) {
      if (sensitiveKeys.includes(key)) {
        obj[key] = '***MASKED***';
      } else if (typeof obj[key] === 'object') {
        mask(obj[key]);
      }
    }
  }

  mask(cloned);

  return cloned;
}