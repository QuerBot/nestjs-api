import crypto from 'crypto';

export default function(repository, name) {
  let hash = '';
  let exists = false;
  do {
    hash = crypto
      .createHash('sha512')
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
