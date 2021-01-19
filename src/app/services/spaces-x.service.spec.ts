import { TestBed } from "@angular/core/testing";

import { SpacesXService } from "./spaces-x.service";

describe("SpacesXService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: SpacesXService = TestBed.get(SpacesXService);
    expect(service).toBeTruthy();
  });
});
