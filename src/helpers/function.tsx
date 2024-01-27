export const CreateUniqKey = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    (c: string) => {
      var r: number = (Math.random() * 16) | 0,
        v: number = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    }
  );
};

interface Array<T> {
  toGroup(a: any): T;
}
Object.defineProperty(Array.prototype, "toGroup", {
  value: function (callbackFn: any) {
    return this.reduce((a: any, b: any) => {
      const key = callbackFn(b);
      const groupName = key == null ? "notTaken" : key;
      return { ...a, [groupName]: groupName in a ? [...a[groupName], b] : [b] };
    }, {});
  },
});
