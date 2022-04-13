/*
class InputSource {
  public fetch(): string {
    throw new Error("Please implement InputSouurce and override this method");
  }
}
class FileSource extends InputSource {
  public readonly destination: string;

  public constructor(destinatin: string){
    super();
    this.destination = destinatin;
  }
  public fetch(): string {
    //const reader: Reader = FileSystem.readFile(this.destination);
    return "data";
  }
}
class RequestSource extends InputSource {
  public readonly destination: string;
  
  public constructor(destinatin: string){
    super();
    this.destination = destinatin;
  }

  public fetch(): string {
    //const response: Response = HTTPRequest.get(this.destination);
    return "data";
  }
}
const source1: InputSource = new FileSource("/data/file.txt");
const source2: InputSource = new RequestSource("http://www.google.com");
const data1: string = source1.fetch();
const data2: string = source2.fetch();
const source3: RequestSource = new FileSource("/data/file.txt");
const source4: FileSource = new RequestSource("http://www.google.com");
const data3: string = source3.fetch();
const data4: string = source4.fetch();
*/

class FileSource {
  public readonly destination: string;

  public constructor(destinatin: string){
    this.destination = destinatin;
  }
  public fetch(): string {
    //const reader: Reader = FileSystem.readFile(this.destination);
    return "data";
  }
}
class RequestSource {
  public readonly destination: string;
  
  public constructor(destinatin: string){
    this.destination = destinatin;
  }

  public fetch(): string {
    //const response: Response = HTTPRequest.get(this.destination);
    return "data";
  }
}
const source3: RequestSource = new FileSource("/data/file.txt");
const source4: FileSource = new RequestSource("http://www.google.com");
const data3: string = source3.fetch();
const data4: string = source4.fetch();