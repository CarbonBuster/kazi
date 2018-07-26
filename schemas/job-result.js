exports.job = {
  properties: {
    hash: { type: 'string' },
    result: { type: 'object' }
  },
  required: ['hash', 'result'],
  type: 'object'
};
