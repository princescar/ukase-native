const BASE_URL = 'https://api.hmc000.com';

module.exports = {
  login(code) {
    return post('/login', { code });
  }
};

function get(url, query) {
  return request('GET', url, query);
}

function post(url, data, query) {
  return request('POST', url, query, data);
}

function request(method, url, query, body) {
  let fullUrl = BASE_URL + url;
  if (query) {
    fullUrl += `?${query}`;
  }
  const token = wx.getStorageSync('token');
  const header = token ? { 'Authorization': `Bearer ${token}` } : null;

  return new Promise((resolve, reject) =>
    wx.request({
      method: method,
      url: fullUrl,
      header: header,
      data: body,
      success: resolve,
      fail: reject
    })
  );
}