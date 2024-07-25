export default function taskBlock(trueOrFalse) {
  task = false;
  task2 = true;

  if (trueOrFalse) {
    var task = task;
    var task2 = task2;
  }

  return [task, task2];
}
