export const countStore = {
  value: 0,
  increase() {
    this.value = this.value + 1;
  },
  decrease() {
    this.value = this.value - 1;
  },
};

export const useStore = () => ({ countStore });
