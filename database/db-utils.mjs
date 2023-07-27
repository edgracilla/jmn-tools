import { customAlphabet } from 'nanoid';
import { basename, resolve } from 'path';

const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';
export const nanoidCustom = (len = 21) => customAlphabet(alphabet, len)();

export const getPathInfo = (metaUrl) => {
  const resource = basename(resolve(metaUrl, '..'));
  const version = basename(resolve(metaUrl, '../../..'));
  const modelName = `${version}-${resource}`;

  return { resource, version, modelName };
};

export default {};
