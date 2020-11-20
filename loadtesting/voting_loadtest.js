// Creator: WebInspector 537.36

import { sleep, group } from "k6";
import http from "k6/http";

export const options = {};

export default function main() {
  let response;

  group("page_2 - http://localhost:3000/", function () {
    response = http.get("http://localhost:3000/", {
      headers: {
        Host: "localhost:3000",
        Connection: "keep-alive",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-User": "?1",
        "Sec-Fetch-Dest": "document",
        Referer: "http://localhost:3000/app/register",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9",
        Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
      },
    });

    response = http.get("http://localhost:3000/app", {
      headers: {
        Host: "localhost:3000",
        Connection: "keep-alive",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-User": "?1",
        "Sec-Fetch-Dest": "document",
        Referer: "http://localhost:3000/app/register",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9",
        Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
        "If-None-Match": 'W/"508-Yr/lAjuWiE42+kfnRRo93pUzGIg"',
      },
    });

    response = http.get("http://localhost:3000/app/", {
      headers: {
        Host: "localhost:3000",
        Connection: "keep-alive",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-User": "?1",
        "Sec-Fetch-Dest": "document",
        Referer: "http://localhost:3000/app/register",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9",
        Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
        "If-None-Match": 'W/"508-Yr/lAjuWiE42+kfnRRo93pUzGIg"',
      },
    });

    response = http.get(
      "https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css",
      {
        headers: {
          Referer: "http://localhost:3000/",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
        },
      }
    );

    response = http.get("http://localhost:3000/app/css/app.css", {
      headers: {
        Host: "localhost:3000",
        Connection: "keep-alive",
        "If-Modified-Since": "Fri, 16 Oct 2020 19:27:45 GMT",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
        "If-None-Match": 'W/"294-17532e1e193"',
        Accept: "text/css,*/*;q=0.1",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Dest": "style",
        Referer: "http://localhost:3000/app/",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9",
        Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
      },
    });

    response = http.get(
      "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
      {
        headers: {
          Origin: "http://localhost:3000",
          Referer: "http://localhost:3000/",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
        },
      }
    );

    response = http.get("http://localhost:3000/app/js/bundle.js", {
      headers: {
        Host: "localhost:3000",
        Connection: "keep-alive",
        "If-Modified-Since": "Fri, 20 Nov 2020 10:04:46 GMT",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
        "If-None-Match": 'W/"2045bf-175e51d09ff"',
        Accept: "*/*",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Dest": "script",
        Referer: "http://localhost:3000/app/",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9",
        Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
      },
    });

    response = http.get("ws://localhost:3000/graphqlsubscription", {
      headers: {
        Pragma: "no-cache",
        Origin: "http://localhost:3000",
        "Accept-Encoding": "gzip, deflate, br",
        Host: "localhost:3000",
        "Accept-Language": "en-US,en;q=0.9",
        "Sec-WebSocket-Key": "JVX09k5h3aOX/mgdQY/9VA==",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
        Upgrade: "websocket",
        "Sec-WebSocket-Extensions":
          "permessage-deflate; client_max_window_bits",
        "Cache-Control": "no-cache",
        "Sec-WebSocket-Protocol": "graphql-ws",
        Connection: "Upgrade",
        "Sec-WebSocket-Version": "13",
      },
    });

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/index",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/index",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/index",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/index",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchCandidates",
      '{"operationName":"FetchCandidates","variables":{},"query":"query FetchCandidates {\\n  candidates {\\n    ...Candidate\\n    __typename\\n  }\\n}\\n\\nfragment Candidate on Candidate {\\n  id\\n  voteCount\\n  name\\n  __typename\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/election",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=CalculateWinner",
      '{"operationName":"CalculateWinner","variables":{},"query":"query CalculateWinner {\\n  calculateWinner {\\n    id\\n    voteCount\\n    name\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/election",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/election",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/election",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/election",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/election",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/election",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/election",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/election",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=IncreaseVoteCount",
      '{"operationName":"IncreaseVoteCount","variables":{"id":4,"count":1},"query":"mutation IncreaseVoteCount($id: Int!, $count: Int!) {\\n  increaseVoteCount(candidateId: $id, count: $count)\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/election",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=UpdateUserCandidateIds",
      '{"operationName":"UpdateUserCandidateIds","variables":{"candidateIds":[4,3,1,2]},"query":"mutation UpdateUserCandidateIds($candidateIds: [Int!]!) {\\n  updateUserCandidateIds(candidateIds: $candidateIds)\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/election",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=CalculateWinner",
      '{"operationName":"CalculateWinner","variables":{},"query":"query CalculateWinner {\\n  calculateWinner {\\n    id\\n    voteCount\\n    name\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/election",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/election",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/election",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/election",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/index",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/index",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/index",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/index",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/index",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Cookie: "authToken=8024456f-9ea7-4772-b566-a79c7cdb615a",
          "Content-Type": "application/json",
        },
      }
    );
  });

  group("page_1 - http://localhost:3000/", function () {
    response = http.get("http://localhost:3000/", {
      headers: {
        Host: "localhost:3000",
        Connection: "keep-alive",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-User": "?1",
        "Sec-Fetch-Dest": "document",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9",
      },
    });

    response = http.get("http://localhost:3000/app", {
      headers: {
        Host: "localhost:3000",
        Connection: "keep-alive",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-User": "?1",
        "Sec-Fetch-Dest": "document",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9",
      },
    });

    response = http.get("http://localhost:3000/app/", {
      headers: {
        Host: "localhost:3000",
        Connection: "keep-alive",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-User": "?1",
        "Sec-Fetch-Dest": "document",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9",
      },
    });

    response = http.get(
      "https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css",
      {
        headers: {
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          accept: "text/css,*/*;q=0.1",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "style",
          referer: "http://localhost:3000/",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get("http://localhost:3000/app/css/app.css", {
      headers: {
        Host: "localhost:3000",
        Connection: "keep-alive",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
        Accept: "text/css,*/*;q=0.1",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Dest": "style",
        Referer: "http://localhost:3000/app/",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9",
      },
    });

    response = http.get(
      "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
      {
        headers: {
          origin: "http://localhost:3000",
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          accept: "text/css,*/*;q=0.1",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "style",
          referer: "http://localhost:3000/",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get("http://localhost:3000/app/js/bundle.js", {
      headers: {
        Host: "localhost:3000",
        Connection: "keep-alive",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
        Accept: "*/*",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Dest": "script",
        Referer: "http://localhost:3000/app/",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9",
      },
    });

    response = http.get("ws://localhost:3000/graphqlsubscription", {
      headers: {
        Pragma: "no-cache",
        Origin: "http://localhost:3000",
        "Accept-Encoding": "gzip, deflate, br",
        Host: "localhost:3000",
        "Accept-Language": "en-US,en;q=0.9",
        "Sec-WebSocket-Key": "47qa5XRPl3YySeUcEpQwZA==",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
        Upgrade: "websocket",
        "Sec-WebSocket-Extensions":
          "permessage-deflate; client_max_window_bits",
        "Cache-Control": "no-cache",
        "Sec-WebSocket-Protocol": "graphql-ws",
        Connection: "Upgrade",
        "Sec-WebSocket-Version": "13",
      },
    });

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/index",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/index",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/index",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/index",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/index",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/register",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/register",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/register",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/register",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/register",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/register",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/register",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/register",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/register",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/graphql?opName=FetchUserContext",
      '{"operationName":"FetchUserContext","variables":{},"query":"query FetchUserContext {\\n  self {\\n    id\\n    name\\n    userType\\n    candidateIds\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          accept: "*/*",
          "X-CSRF": "csrf",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "content-type": "application/json",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/register",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          "Content-Type": "application/json",
        },
      }
    );

    response = http.post(
      "http://localhost:3000/auth/createUser",
      '{"email":"test@gmail.com","name":"Bot"}',
      {
        headers: {
          Host: "localhost:3000",
          Connection: "keep-alive",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
          "Content-Type": "application/json",
          Accept: "*/*",
          Origin: "http://localhost:3000",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:3000/app/register",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
        },
      }
    );
  });

  // Automatically added sleep
  sleep(1);
}
