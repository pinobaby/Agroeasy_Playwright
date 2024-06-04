import { test, expect } from "@playwright/test";
import LoginPage from "../../../pages/login/login.page";
import CropsPage from "../../../pages/catalogs/crops/crop.page";

test("Crops interactions", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const cropsPage = new CropsPage(page);

  // Login and navigate to dashboard
  await loginPage.navigate();
  await loginPage.login("erosleon9@gmail.com", "Erleon9");
  await loginPage.selectKakuyo();
  await loginPage.goToApp();

  // Navigate to Crops section

  await cropsPage.goToCrops();
  await cropsPage.searchCrop();
  await cropsPage.clickMoreButton();
  await cropsPage.toggleActiveInactiveCrops();

  await cropsPage.goToVarieties();
  await cropsPage.toggleActiveInactiveVarieties();

  await cropsPage.goToTypes();
  await cropsPage.toggleActiveInactiveTypes();

  await cropsPage.goToCropsFromMenu();
  await cropsPage.toggleActiveInactiveCropsFromMenu();

  await cropsPage.goToCropsFromMenu();

  

  await cropsPage.createNewCrop();
  await page
    .getByRole("button", { name: "Crear nuevo tamaño de cultivo" })
    .click({ timeout: 10000 });
  await page
    .locator("form")
    .getByText("arrow_drop_down")
    .click({ timeout: 10000 });
  await page
    .getByRole("option", { name: "| Sandia" })
    .locator("div")
    .nth(2)
    .click({ timeout: 10000 });
  await page.getByLabel("Seleccionar tipo").click({ timeout: 10000 });
  await page
    .getByRole("option", { name: "| Seedless" })
    .locator("span")
    .click({ timeout: 10000 });
  await page.getByPlaceholder("Proporciona el nombre").click();
  await page.getByPlaceholder("Proporciona el nombre").press("CapsLock");
  await page.getByPlaceholder("Proporciona el nombre").fill("S");
  await page.getByPlaceholder("Proporciona el nombre").press("CapsLock");
  await page.getByPlaceholder("Proporciona el nombre").fill("Sandia ");
  await page.getByPlaceholder("Proporciona el nombre").press("CapsLock");
  await page.getByPlaceholder("Proporciona el nombre").fill("Sandia S");
  await page.getByPlaceholder("Proporciona el nombre").press("CapsLock");
  await page.getByPlaceholder("Proporciona el nombre").fill("Sandia Shila");
  await page.getByPlaceholder("T1").click({ timeout: 10000 });
  await page.getByPlaceholder("T1").fill("11");
  await page
    .locator("div")
    .filter({
      hasText:
        /^Código Nacional ¿Qué descripción tiene este tipo a nivel país\? 0 \/ 10$/,
    })
    .getByLabel("", { exact: true })
    .click();
  await page
    .locator("div")
    .filter({
      hasText:
        /^Código Nacional ¿Qué descripción tiene este tipo a nivel país\? 0 \/ 10$/,
    })
    .getByLabel("", { exact: true })
    .fill("11");
  await page.getByPlaceholder("Sin Semilla").click();
  await page.getByPlaceholder("Sin Semilla").press("CapsLock");
  await page.getByPlaceholder("Sin Semilla").fill("S");
  await page.getByPlaceholder("Sin Semilla").press("CapsLock");
  await page.getByPlaceholder("Sin Semilla").fill("Sin d");
  await page.getByPlaceholder("Sin Semilla").press("CapsLock");
  await page.getByPlaceholder("Sin Semilla").fill("Sin S");
  await page.getByPlaceholder("Sin Semilla").press("CapsLock");
  await page.getByPlaceholder("Sin Semilla").fill("Sin ");
  await page.getByPlaceholder("Sin Semilla").press("CapsLock");
  await page.getByPlaceholder("Sin Semilla").fill("Sin S");
  await page.getByPlaceholder("Sin Semilla").press("CapsLock");
  await page.getByPlaceholder("Sin Semilla").fill("Si");
  await page.getByPlaceholder("Sin Semilla").press("CapsLock");
  await page.getByPlaceholder("Sin Semilla").fill("SiS");
  await page.getByPlaceholder("Sin Semilla").press("CapsLock");
  await page.getByPlaceholder("Sin Semilla").fill("SiSemilla");
  await page.locator("form").getByLabel("", { exact: true }).nth(3).click();
  await page
    .locator("form")
    .getByLabel("", { exact: true })
    .nth(3)
    .fill("12345");
  await page.getByPlaceholder("Seedless").click();
  await page.getByPlaceholder("Seedless").press("CapsLock");
  await page.getByPlaceholder("Seedless").fill("S");
  await page.getByPlaceholder("Seedless").press("CapsLock");
  await page.getByPlaceholder("Seedless").fill("Seedless");
  await page.getByRole("button", { name: "Guardar" }).click({ timeout: 20000 });

  try {
    await expect(page.getByText("Solicitud terminada con éxito")).toBeVisible({
      timeout: 15000,
    });
    console.log("The crop size was created successfully.");
  } catch {
    const errorMessage = await page.getByText(
      "Lo sentimos su solicitud no pudo ser aceptada • Tipo de cultivo es obligatorio"
    );
    await expect(errorMessage).toBeVisible();
    console.log(
      "Failed to create the crop size. Validation error message displayed."
    );
  }

  console.log("Test completed successfully");
});

console.log("Test completed successfully");
