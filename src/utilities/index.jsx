export const getFormData = (target) => {
  let values = {};
  for (let i = 0; i < target.length; i++) {
    const input = target[i];
    if (input.name) {
      values[input.name] = input.value ?? undefined;
    }
  }
  return values;
};
