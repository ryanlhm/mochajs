const { expect } = require('chai');
const supertest = require('supertest');

const api = supertest('https://custinfo.smartfren.com/factory/engine/v3/s4u/campaign');

const path = '/list';

function getCampaignlist() {
  return api.post(path).query()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Signature KeyId="5d1d334b00d0463f7934d511bc7971befc53468793bfc5ec33531f6e",algorithm="hmac-sha256",signature="m9qVG9MLBWKpeEw%2FX9GbF4LTVB6w9ryqiDvko%2FdVVyc%3D"')
    .send ('mdn' = '62881080239612');
}

describe('@get user', () => {
  it(`@get it success get user list data`, async () => {
    const response = await getCampaignlist();
    expect(response.status);
  });
});