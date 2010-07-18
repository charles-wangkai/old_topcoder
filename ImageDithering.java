public class ImageDithering {
	public int count(String dithered, String[] screen) {
		boolean dither[] = new boolean[26];
		for (int i = 0; i < dithered.length(); i++) {
			dither[dithered.charAt(i) - 'A'] = true;
		}
		int count = 0;
		for (int i = 0; i < screen.length; i++) {
			for (int j = 0; j < screen[i].length(); j++) {
				if (dither[screen[i].charAt(j) - 'A']) {
					count++;
				}
			}
		}
		return count;
	}
}
