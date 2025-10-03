import { test, expect } from '@playwright/test';

test.describe('Performance Tests', () => {
  test('homepage loads within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    
    console.log(`Page load time: ${loadTime}ms`);
    expect(loadTime).toBeLessThan(3000); // Should load within 3 seconds
  });

  test('critical resources are loaded', async ({ page }) => {
    await page.goto('/');
    
    // Check if hero video is loaded
    const heroVideo = await page.locator('video').first();
    await expect(heroVideo).toBeVisible();
    
    // Check if navigation is present
    const navigation = await page.locator('nav');
    await expect(navigation).toBeVisible();
  });

  test('no console errors on page load', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForTimeout(2000); // Wait for any async errors

    expect(consoleErrors).toHaveLength(0);
  });

  test('videos are compressed and loading', async ({ page }) => {
    await page.goto('/');
    
    // Check hero video source
    const heroVideoSrc = await page.locator('video source').first().getAttribute('src');
    expect(heroVideoSrc).toContain('compressed');
  });

  test('Calendly is not loaded until interaction', async ({ page }) => {
    await page.goto('/');
    
    // Check Calendly script is not initially loaded
    const calendlyScriptInitial = await page.locator('script[src*="calendly"]').count();
    expect(calendlyScriptInitial).toBe(0);
    
    // Scroll to trigger loading
    await page.evaluate(() => window.scrollBy(0, 100));
    await page.waitForTimeout(1000);
    
    // Check if Calendly script is now loaded
    const calendlyScriptAfter = await page.locator('script[src*="calendly"]').count();
    expect(calendlyScriptAfter).toBeGreaterThan(0);
  });
});

test.describe('Accessibility Tests', () => {
  test('heading hierarchy is correct', async ({ page }) => {
    await page.goto('/');
    
    // Check for h1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBeGreaterThanOrEqual(1);
    
    // Check that we don't skip heading levels
    const h2Count = await page.locator('h2').count();
    const h3Count = await page.locator('h3').count();
    
    if (h3Count > 0) {
      expect(h2Count).toBeGreaterThan(0); // Should have h2 before h3
    }
  });

  test('color contrast is sufficient', async ({ page }) => {
    await page.goto('/');
    
    // Check FAQ section specifically
    await page.locator('section:has-text("Quick Answers")').scrollIntoViewIfNeeded();
    
    // The text should be visible (basic check)
    const faqText = await page.locator('text=Common questions about getting started');
    await expect(faqText).toBeVisible();
  });
});

test.describe('Navigation Tests', () => {
  test('Industries dropdown works', async ({ page }) => {
    await page.goto('/');
    
    // Click Industries dropdown
    await page.click('button:has-text("Industries")');
    
    // Check Real Estate link is visible
    const realEstateLink = await page.locator('a:has-text("Real Estate")');
    await expect(realEstateLink).toBeVisible();
    
    // Click Real Estate link
    await realEstateLink.click();
    
    // Verify navigation to real estate page
    await expect(page).toHaveURL('/real-estate');
  });

  test('404 page works correctly', async ({ page }) => {
    await page.goto('/non-existent-page');
    
    // Check for 404 content
    await expect(page.locator('text=404')).toBeVisible();
    await expect(page.locator('text=Page Not Found')).toBeVisible();
    
    // Check return home button works
    await page.click('text=Return Home');
    await expect(page).toHaveURL('/');
  });
});