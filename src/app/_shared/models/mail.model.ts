export class Mail {
  public from: string = '';
  public read: boolean = false;
  public content: string = '';
  public date: string = new Date().toISOString();
  public star: boolean = false;
  public id: string = '0';
  public color?: string;

  constructor(mail?: Partial<Mail>) {
    if (!mail) {
      Object.create(this);
    } else {
      Object.assign(this, mail);
      this.color = this._intToRGB(this._hashCode(this.from));
    }
  }

  private _hashCode(str: string): number {
    let hash: number = 0;

    for (let i: number = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    return hash;
  }

  private _intToRGB(i: number): string {
    const c: string = (i & 0x00FFFFFF).toString(16).toUpperCase();

    return '#' + '00000'.substring(0, 6 - c.length) + c;
  }
}
