import java.util.Arrays;

public class FoxAndGame {
	public int countStars(String[] result) {
		return Arrays.asList(result).stream()
				.map((stage) -> stage.chars().filter(c -> c == 'o').count())
				.reduce((t, u) -> t + u).get().intValue();
	}
}
