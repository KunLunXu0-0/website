import axios from '@utils/request';

// 创建字典
export const createDatasetsfroms = async ({
  spin,
  body,
} = {}) => {
  const res = await axios({
    spin,
    url: GLOBAL_SERVICE.GRAPHQL_URL,
    method: 'post',
    data: {
      variables: { body },
      query: `
        mutation(
          $body: [DatasetsfromFields!]!,
        ){
          createDatasetsfroms(
            body: $body,
          ){
            change {
              id
              value
              code
              desc
              name
              icon
            }
          }
        }`,
    },
  });
  return _.get(res, 'data.data.createDatasetsfroms') || {};
};

// 更新字典
export const updateDatasetsfroms = async ({
  spin,
  body,
  conds,
} = {}) => {
  const res = await axios({
    spin,
    url: GLOBAL_SERVICE.GRAPHQL_URL,
    method: 'post',
    data: {
      variables: { body, conds },
      query: `
        mutation(
          $body: DatasetsfromFields!
          $conds: DatasetsfromSearch!
        ){
          updateDatasetsfroms(
            body: $body,
            conds: $conds,
          ){
            change {
              id
              value
              code
              desc
              name
              icon
            }
          }
        }`,
    },
  });
  return _.get(res, 'data.data.updateDatasetsfroms') || {};
};

// 删除字典
export const removeDatasetsfroms = async ({
  spin,
  conds,
} = {}) => {
  const res = await axios({
    spin,
    url: GLOBAL_SERVICE.GRAPHQL_URL,
    method: 'post',
    data: {
      variables: { conds },
      query: `
        mutation(
          $conds: DatasetsfromSearch!
        ){
          removeDatasetsfroms(
            conds: $conds,
          ){
            change {
              id
              value
              code
              desc
              icon
              name
            }
          }
        }`,
    },
  });
  return _.get(res, 'data.data.removeDatasetsfroms') || {};
};
