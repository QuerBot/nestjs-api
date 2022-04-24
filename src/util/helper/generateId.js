import crypto from 'crypto';

export default async function(repository, name) {
  let hash = '';
  let exists = false;
  do {
    hash = crypto
      .createHash('md5')
      .update(name, 'utf-8')
      .digest('hex');
    const condition = {
      where: {
        id: hash,
      },
    };
    const res = repository.find(condition);
    res ? (exists = true) : (exists = false);
  } while (!exists);
  return hash;
}
