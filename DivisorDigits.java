public class DivisorDigits {
	public int howMany(int number) {
		int result = 0;
		int temp = number;
		while (temp > 0) {
			int digit = temp % 10;
			temp /= 10;
			if (digit != 0 && number % digit == 0) {
				result++;
			}
		}
		return result;
	}
}
