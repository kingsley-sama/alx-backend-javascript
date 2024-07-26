export default function returnHowManyArguments(...theArgs) {
  let i = 0;
  for (const args of theArgs) { // eslint-disable-line no-unused-vars
    i += 1;
  }
  return i;
}
