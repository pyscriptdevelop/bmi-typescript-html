function computingBmi(height: number, weight: number): number {
  return weight / (height * height);
}
function showResultOnClick(): void {
  let weightInput = (<HTMLInputElement>document.getElementById("weight")).value;
  let heightInput = (<HTMLInputElement>document.getElementById("height")).value;
  let showResult = <HTMLElement>document.getElementById("result");
  showResult.innerHTML = "";
  let result: number = computingBmi(+heightInput, +weightInput);
  showResult.innerHTML = `${result}`;
}
