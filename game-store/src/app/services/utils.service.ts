export class UtilsService {
  static isEmpty(obj: object): boolean {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
}
