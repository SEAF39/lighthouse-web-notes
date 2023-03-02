const request = require("request");

function fetch(url, callback) {
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching ${url}. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const data = JSON.parse(body);
    callback(null, data);
  });
}

function fetchMyIP(callback) {
  const url = "https://api.ipify.org?format=json";
  fetch(url, (error, data) => {
    if (error) {
      callback(error, null);
      return;
    }
    const ip = data.ip;
    callback(null, ip);
  });
}

function fetchCoordsByIP(ip, callback) {
  const url = `https://freegeoip.app/json/${ip}`;
  fetch(url, (error, data) => {
    if (error) {
      callback(error, null);
      return;
    }
    const { latitude, longitude } = data;
    callback(null, { latitude, longitude });
  });
}

function fetchISSFlyOverTimes(coords, callback) {
  const url = `http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`;
  fetch(url, (error, data) => {
    if (error) {
      callback(error, null);
      return;
    }
    const passes = data.response;
    callback(null, passes);
  });
}

function nextISSTimesForMyLocation(callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      callback(error, null);
      return;
    }
    fetchCoordsByIP(ip, (error, loc) => {
      if (error) {
        callback(error, null);
        return;
      }
      fetchISSFlyOverTimes(loc, (error, passes) => {
        if (error) {
          callback(error, null);
          return;
        }
        callback(null, passes);
      });
    });
  });
}

module.exports = { nextISSTimesForMyLocation };
